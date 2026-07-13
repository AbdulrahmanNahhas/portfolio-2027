{ pkgs, ... }: {

  languages.javascript = {
    enable = true;

    npm.enable = false;

    pnpm = {
      enable = true;
      install.enable = true;
    };

    package = pkgs.nodejs_26;
  };

  languages.typescript = {
    enable = true;
    lsp.enable = true;
  };
}
