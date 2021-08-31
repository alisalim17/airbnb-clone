import { RegisterFormValues } from "@abb/controller";
import { Feather } from "@expo/vector-icons";
import { useField } from "formik";
import * as React from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { theme } from "../../utils/theme";
import { withProps } from "../../utils/withProps";
import Box from "../../components/Box";

type OnBlurType =
  | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
  | undefined;

type OnChangeTextType = ((text: string) => void) | undefined;

type InputFieldProps = {
  fieldName: keyof RegisterFormValues;
  iconName: any;
} & TextInputProps;

const TextInput = styled.TextInput`
  padding: ${theme.spacing[2]}px;
  border-radius: ${theme.borderRadius[5]}px;
  color: ${theme.colors.gray[800]};
`;

export interface IconProps {
  isError: boolean;
  touched: boolean;
}

const Container = withProps<IconProps>()(styled.View)`
  flex-direction: row;
  align-items: center;
  border-width: 0.8px;
  border-color: ${({ touched, isError }) =>
    touched
      ? isError
        ? theme.colors.danger
        : theme.colors.primary
      : theme.colors.gray[600]};
  border-radius: ${theme.borderRadius[5]}px;
  padding-left: ${theme.spacing[3]}px;
  margin-bottom: ${theme.spacing[4]}px;
`;

const InputField: React.FC<InputFieldProps> = ({
  fieldName,
  iconName,
  ...props
}) => {
  const [{ onBlur, onChange, value }, { error, touched }] = useField(fieldName);
  const inputRef = useRef<any>();
  // @todo use memo for this
  const isError: boolean = error && touched;
  const color = touched
    ? isError
      ? theme.colors.danger
      : theme.colors.primary
    : theme.colors.gray[600];

  const [show, setShow] = useState(fieldName === "password");

  const onFocusContainer = () => inputRef.current.focus();

  return (
    <TouchableWithoutFeedback onPress={onFocusContainer}>
      <Container touched={touched} isError={isError}>
        <Feather name={iconName} size={16} color={theme.colors.gray[700]} />

        <Box style={{ flex: 1 }}>
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChange(fieldName) as OnChangeTextType}
            onBlur={onBlur(fieldName) as OnBlurType}
            placeholderTextColor={theme.colors.gray[800]}
            {...(props as any)}
            secureTextEntry={show}
          />
        </Box>

        {touched && fieldName !== "password" ? (
          <Box style={{ flex: 0.1 }}>
            <View
              style={{
                backgroundColor: color,
                width: 20,
                height: 20,
                borderRadius: 999,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name={isError ? "x" : "check"}
                size={16}
                color={theme.colors.gray[300]}
              />
            </View>
          </Box>
        ) : null}
        {fieldName === "password" ? (
          <Box style={{ flex: 0.15 }}>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Text>Show</Text>
            </TouchableOpacity>
          </Box>
        ) : null}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default InputField;
