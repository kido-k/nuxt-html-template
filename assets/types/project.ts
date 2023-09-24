type Project = {
  projectId: string,
  projectName: string,
  createdAt: string,
}

type Page = {
	name: string
  property: any
}

type Condition = {
	type: 'id' | 'class' | 'name';
	value: string;
	action: 'exist' | 'click' | 'input';
}