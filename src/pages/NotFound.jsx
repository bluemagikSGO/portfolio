import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { ArrowLink, ButtonLink } from "../components/ui";
import usePageMeta from "../hooks/usePageMeta";

const NotFound = () => {
  usePageMeta({
    title: "Page not found — Steven Gabriel",
    description: "The page you were looking for doesn't exist.",
    noindex: true,
  });

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none wrap flex min-h-[70vh] flex-col justify-center py-24">
        <p className="label text-subtle">Error 404</p>
        <h1 className="display mt-8 max-w-[14ch] text-[clamp(3rem,9vw,8rem)]">
          Nothing lives at this address.
        </h1>
        <p className="mt-8 max-w-[34rem] text-[17px] leading-relaxed text-muted">
          The link may be old or mistyped. Everything on the site is reachable
          from the home page.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <ButtonLink to="/">Back to the home page</ButtonLink>
          <ArrowLink to="/#work">Selected work</ArrowLink>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default NotFound;
