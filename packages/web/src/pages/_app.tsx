import Head from "next/head";
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  // createPageProgressBar();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import Head from "next/head";
// import "../styles/globals.css";
// import "../styles/index.css";

// // if (process.env.NODE_ENV === "production")
// //   // @ts-ignore
// //   import("../styles/tailwind.css");

// const MyApp = ({ Component, pageProps }) => {
//   // createPageProgressBar();

//   return (
//     <>
//       <Head>
//         <meta
//           name="viewport"
//           content="width=device-width,initial-scale=1,user-scalable=no,user-scalable=0"
//         />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// };

// export default MyApp;

// name: Deploy Frontend Production
// on:
//   push:
//     branches: [ prod ]

// jobs:
//   Deploy-Frontend-Prod:
//     runs-on: ubuntu-latest
//     steps:
//       - uses: actions/checkout@v2
//       - run: yarn install
//       - run: npm run build

//       - name: Deploy to Netlify
//         uses: nwtgck/actions-netlify@v1.2
//         with:
//           publish-dir: 'packages/web/out'
//           functions-dir: 'packages/web/out_functions'
//           # netlify-config-path: './netlify.toml'
//           production-branch: master
//           production-deploy: true
//           github-token: ${{ secrets.GITHUB_TOKEN }}
//           deploy-message: "Deploy from GitHub Actions"
//           enable-pull-request-comment: false
//           enable-commit-comment: true
//           overwrites-pull-request-comment: true
//         env:
//           NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_TOKEN }}
//           NETLIFY_SITE_ID: ${{ secrets.SITE_ID }}
//         timeout-minutes: 1
