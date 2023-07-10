{ pkgs }: {
  deps = [
    pkgs.nodejs-14_x
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
