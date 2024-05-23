import Layout from "@theme/Layout";
import QuickLink from "../components/QuickLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const Concepts = [
  {
    title: "Why Running Nodes?",
    content: "What are the advantages of running nodes on MultiversX?",
    docName: "/docs/node-runner/intro",
    icon: "💰",
  },
  {
    title: "Requirements",
    content: "What do you need to run a node on MultiversX?",
    docName: "/docs/intro",
    icon: "📊",
  },

  {
    title: " Staking Provider",
    content:
      "Learn how to provide staking services and earn rewards on MultiversX.",
    docName: "/docs/intro",
    icon: "💰",
  },
];

const RunNodesQuickLinks = [
  {
    title: "Setup a Validator Node",
    content: "Learn how to set up and run a validator node on MultiversX.",
    docName: "/docs/intro",
    icon: "🖥",
  },
  {
    title: "Use Multikey",
    content:
      "Learn how to use Multikey to manage numerous validator nodes on MultiversX.",
    docName: "/docs/intro",
    icon: "🔗",
  },
  {
    title: "Maintenace & Monitoring",
    content: "Understand how to maintain and monitor your validator node.",
    docName: "/docs/intro",
    icon: "🔧",
  },
];

const ToolsQuickLinks = [
  {
    title: "Maintenace & Monitoring",
    content: "Understand how to maintain and monitor your validator node.",
    docName: "/docs/intro",
    icon: "🔧",
  },
  {
    title: "What are Staking Providers?",
    content: "Understand the role of staking providers on MultiversX.",
    docName: "/docs/intro",
    icon: "🖥",
  },
];

const resourceTags = [
  {
    title: "Discord",
    color: "purple",
    icon: "🗨️",
    url: "https://discordapp.com",
  },
  { title: "Telegram", color: "blue", icon: "📬", url: "https://telegram.org" },
  {
    title: "External Resources",
    color: "green",
    icon: "🌐",
    url: "https://example.com",
  },
];

export default function NodeRunner(): JSX.Element {
  return (
    <Layout
      title="NodeRunner"
      description="Learn how to run nodes & validate on MultiversX."
    >
      <PageHeader
        title="NodeRunner Path"
        subtitle="Take part in securing the network."
      />

      <PageSection title="Core Concepts">
        {Concepts.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>

      <PageSection title="Running Nodes on MultiversX">
        {RunNodesQuickLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>

      <PageSection title="Tools & Tips">
        {ToolsQuickLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>

      {/* <PageSection title="Need Supports?">
        {resourceTags.map((tag) => (
          <a
            key={tag.title}
            className={clsx("tag", styles.tag)}
            href={tag.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: tag.color, textDecoration: "none" }}
          >
            <span className={styles.icon}>{tag.icon}</span>
            <span>{tag.title}</span>
          </a>
        ))}
      </PageSection> */}
    </Layout>
  );
}
