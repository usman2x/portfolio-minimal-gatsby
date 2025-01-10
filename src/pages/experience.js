import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Experience" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="experience" heading="Professional Experience" />
      </Page>
    </>
  );
}
