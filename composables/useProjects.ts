export const useProjects = () => {

  const projects = useState<Array<Project>>('projects', () => [])
  const currentProject = useState<Project>('currentProject', () => {
    return {
      projectName: '',
      createdAt: '',
    }
  })

  async function setProjects() {
    const { getFieldData }: any = useFirestore()
    projects.value = await getFieldData('editor-project')
    projects.value.unshift({
      projectName: '',
      createdAt: '',
    })
  }

  async function addNewProject(projectName: string) {
    const { addDocData, addDocInDocData }: any = useFirestore()
    const projectId =  await addDocData(
      {
        collectionKey: 'editor-project',
        collectionData: {
          name: projectName,
        },
      },
      true
    )

    await addDocInDocData(
      {
        collectionKey: 'editor-project',
        docKey: projectId,
        newCollectionKey: 'page',
        collectionData: {
          name: '',
          property: {},
        },
      },
      true
    )
    return projectId
  }

  async function deleteProject(projectId: string) {
    const { deleteDocData }: any = useFirestore()
    await deleteDocData({ collectionKey: 'editor-project', docKey: projectId })
  }

  function getProjects() {
    return projects.value
  }

  async function setCurrentProject(projectId: string) {
    const { getDocData }: any = useFirestore()
    currentProject.value = await getDocData({ collectionKey: 'editor-project', docKey: projectId })
  }

  function getCurrentProject() {
    return currentProject.value
  }

  return {
    setProjects,
    addNewProject,
    deleteProject,
    getProjects,
    setCurrentProject,
    getCurrentProject,
  }
}
