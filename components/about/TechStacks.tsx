import Container from '../layouts/Container';
import Section from '../layouts/Section';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiNodedotjs,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiMarkdown,
  SiVercel,
  SiAzuredevops,
} from 'react-icons/si';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import classes from './TechStack.module.css';

export default function TechStacks() {
  return (
    <Section
      title="My Tech Stacks"
      description="Tech Stacks I've Aquired Through My Several Years Of Journey As A Software Developer"
    >
      <Container>
        <div className={classes.container}>
          <SiHtml5
            id="html"
            className={classes.icon}
            data-tooltip-content="HTML"
          />
          <ReactTooltip anchorId="html" />

          <SiCss3
            id="css"
            className={classes.icon}
            data-tooltip-content="CSS"
          />
          <ReactTooltip anchorId="css" />

          <SiJavascript
            id="javascript"
            className={classes.icon}
            data-tooltip-content="Javascript"
          />
          <ReactTooltip anchorId="javascript" />

          <SiBootstrap
            id="bootstrap"
            className={classes.icon}
            data-tooltip-content="Bootstrap"
          />
          <ReactTooltip anchorId="bootstrap" />

          <SiTypescript
            id="typescript"
            className={classes.icon}
            data-tooltip-content="Typescript"
          />
          <ReactTooltip anchorId="typescript" />

          <SiReact
            id="react"
            className={classes.icon}
            data-tooltip-content="React"
          />
          <ReactTooltip anchorId="react" />

          <SiRedux
            id="redux"
            className={classes.icon}
            data-tooltip-content="Redux"
          />
          <ReactTooltip anchorId="redux" />

          <SiNextdotjs
            id="nextjs"
            className={classes.icon}
            data-tooltip-content="Next.js"
          />
          <ReactTooltip anchorId="nextjs" />

          <SiCsharp
            id="csharp"
            className={classes.icon}
            data-tooltip-content="C#"
          />
          <ReactTooltip anchorId="csharp" />

          <SiDotnet
            id="dotnet"
            className={classes.icon}
            data-tooltip-content=".NET"
          />
          <ReactTooltip anchorId="dotnet" />

          <SiNodedotjs
            id="nodejs"
            className={classes.icon}
            data-tooltip-content="Node.js"
          />
          <ReactTooltip anchorId="nodejs" />

          <SiMicrosoftsqlserver
            id="mssqlserver"
            className={classes.icon}
            data-tooltip-content="SQL Server"
          />
          <ReactTooltip anchorId="mssqlserver" />

          <SiMysql
            id="mysql"
            className={classes.icon}
            data-tooltip-content="MySQL"
          />
          <ReactTooltip anchorId="mysql" />

          <SiMongodb
            id="mongodb"
            className={classes.icon}
            data-tooltip-content="MongoDB"
          />
          <ReactTooltip anchorId="mongodb" />

          <SiAzuredevops
            id="azuredevops"
            className={classes.icon}
            data-tooltip-content="Azure DevOps"
          />
          <ReactTooltip anchorId="azuredevops" />

          <SiVercel
            id="vercel"
            className={classes.icon}
            data-tooltip-content="Vercel"
          />
          <ReactTooltip anchorId="vercel" />

          <SiGit id="git" className={classes.icon} data-tooltip-content="Git" />
          <ReactTooltip anchorId="git" />

          <SiPostman
            id="postman"
            className={classes.icon}
            data-tooltip-content="Postman"
          />
          <ReactTooltip anchorId="postman" />

          <SiGithub
            id="github"
            className={classes.icon}
            data-tooltip-content="Github"
          />
          <ReactTooltip anchorId="github" />

          <SiMarkdown
            id="markdown"
            className={classes.icon}
            data-tooltip-content="Markdown"
          />
          <ReactTooltip anchorId="markdown" />
        </div>
      </Container>
    </Section>
  );
}
