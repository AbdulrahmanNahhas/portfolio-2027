{ pkgs, ... }:

{
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;

    npm.enable = false;
    pnpm = {
      enable = true;
      install.enable = true;
    };
  };

  languages.typescript = {
    enable = true;
    lsp.enable = true;
  };

  env.NEXT_TELEMETRY_DISABLED = "1";

  scripts = {
    dev.exec = "pnpm run dev";
    build.exec = "pnpm run build";
    lint.exec = "pnpm run lint";
    typecheck.exec = "pnpm tsc --noEmit";
  };

  processes.web.exec = "pnpm run dev";

  enterShell = ''
    echo "Next.js development shell ready"
    echo "Node: $(node --version) | Pnpm: $(pnpm --version)"
  '';
}
