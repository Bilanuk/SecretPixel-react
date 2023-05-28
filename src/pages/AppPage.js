import { PageLineSeparator, PageSectionName, PageSection } from "../styled/styles"
import BmpEditor from "../components/BmpEditor/BmpEditor"

function AppPage() {
  return (
    <PageSection>
      <PageSectionName>App page</PageSectionName>
      <PageLineSeparator />

      <BmpEditor />
    </PageSection>
  )
}

export default AppPage
