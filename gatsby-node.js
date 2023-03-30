// https://stackoverflow.com/questions/63124432/how-do-i-configure-mini-css-extract-plugin-in-gatsby
exports.onCreateWebpackConfig = (helper) => {
  const { stage, actions, getConfig } = helper;
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/tag_path/*", 
    toPath: "https://cXXX1.csd.dotomi.com/*", 
    statusCode: 200,
    headers: {'X-From': "Netlify", 'X-Forwarded-Request-Path' : "/tag_path", 'RP-Host' : "netlify-next.cnvrm.com"}
  });
};
