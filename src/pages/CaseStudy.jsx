import { useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import CaseStudyLayout from "../components/CaseStudyLayout";
import usePageMeta from "../hooks/usePageMeta";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  usePageMeta(
    project
      ? {
          title: `${project.title}, ${project.category} — Steven Gabriel`,
          description: project.summary,
          canonicalPath: `/${project.slug}`,
        }
      : {}
  );

  if (!project) return <NotFound />;

  return <CaseStudyLayout project={project} />;
};

export default CaseStudy;
