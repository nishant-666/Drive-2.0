interface Button {
  btnClass?: string;
  title: string;
  onClick?: (event: React.FormEvent) => void;
}

interface Progress {
  progress: number;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}

interface ArrayType {
  map: Function;
}

interface FolderStructure {
  parentId: string;
}
