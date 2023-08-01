interface Button {
  btnClass?: string;
  title: string;
  onClick?: (event: React.FormEvent) => void;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}
