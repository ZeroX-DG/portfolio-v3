import * as React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: 2em;
  a {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    color: #0165ff;
  }
`;

const wavingAnimation = keyframes`
 0% { transform:rotate(0deg); }
 10% { transform:rotate(-10deg); }
 20% { transform:rotate(50deg); }
 30% { transform:rotate(-10deg); }
 40% { transform:rotate(9deg); }
 50% { transform:rotate(0deg); }
 100% { transform:rotate(0deg); }
`;

const Waving = styled.span`
  display: inline-block;
  animation-name: ${wavingAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const WorkCard = styled.div`
  padding: 15px 20px;
  border: 1px solid #dedede;
  margin-bottom: 20px;
  border-radius: 5px;
`;

WorkCard.Title = styled.div`
  font-weight: bold;
`;

WorkCard.Description = styled.div`
  color: rgba(0, 0, 0, 0.9);
`;

WorkCard.Extra = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: underline;
  }
  li::before {
    content: "‣";
    margin-right: 5px;
  }
`;

const works = [
  {
    title: "🌔 Moon",
    description: "A web browser written completely from scratch in Rust.",
    links: [
      { title: "Github repo", href: "https://github.com/ZeroX-DG/moon" },
      {
        title: "Write-up series",
        href: "https://zerox-dg.github.io/blog/tags/browser-from-scratch/"
      }
    ]
  },
  {
    title: "🖼️ Limus",
    description:
      "A tool for transforming images/screenshots to create a more professional look. The resulting image can be used to showcase products on website, design, poster and more!",
    links: [
      { title: "Github repo", href: "https://github.com/ZeroX-DG/limus" },
      { title: "Try it out!", href: "https://limus.netlify.app/" }
    ]
  },
  {
    title: "📝 SnippetStore",
    description:
      "A code snippet management for developers! Build your own cheatsheet and never have to google again!",
    links: [
      {
        title: "Github repo",
        href: "https://github.com/ZeroX-DG/SnippetStore"
      },
      {
        title: "Try it out!",
        href: "https://zerox-dg.github.io/SnippetStoreWeb/"
      }
    ]
  },
  {
    title: "📜 CommitTasks",
    description: "A combination between todo list & git!",
    links: [
      {
        title: "Github repo",
        href: "https://github.com/ZeroX-DG/CommitTasks"
      }
    ]
  },
  {
    title: "📝 Boostnote",
    description:
      "A markdown note-taking app for developers! Although I didn't create the app, I was its main maintainer from 2018 to 2020.",
    links: [
      {
        title: "Github repo",
        href: "https://github.com/BoostIO/Boostnote"
      }
    ]
  },
  {
    title: "📄 Sonalus",
    description: "A modern markdown editor powered by CodeMirror.",
    links: [
      {
        title: "Github repo",
        href: "https://github.com/ZeroX-DG/Sonalus"
      },
      {
        title: "Try it out!",
        href: "https://zerox-dg.github.io/Sonalus/index.html"
      }
    ]
  }
];

export const IndexPage = () => {
  return (
    <Container>
      <h1>
        <Waving>👋</Waving> Hi! I'm Viet-Hung
      </h1>
      <p>Hi there! I'm Viet-Hung, but I usually go by Hung.</p>
      <p>
        I'm a software engineer who loves building 🤯 products. I believe
        building products is a work of art that requires skills, creativity and
        a bit of talent.
      </p>
      <p>
        Outside of work, I usually{" "}
        <a href="https://github.com/ZeroX-DG">build stuff</a> or{" "}
        <a href="https://zerox-dg.github.io/blog/">write about what I learnt</a>{" "}
        via creative writing. I'm also a fan of art, music and{" "}
        <a href="https://mubi.com/users/9258114/watchlist">great cinema.</a>
      </p>
      <p>
        <b>Quick links:</b> <a href="https://github.com/ZeroX-DG">Github</a> |{" "}
        <a href="https://zerox-dg.github.io/blog/">Blog</a> |{" "}
        <a href="mailto:viethungax@gmail.com">Email</a> |{" "}
        <a href="https://www.linkedin.com/in/v-hung/">Linkedin</a>
      </p>
      <h2>What I did I build?</h2>
      <p>Here's a list of my latest works if you wish to know more:</p>
      {works.map(work => (
        <WorkCard>
          <WorkCard.Title>{work.title}</WorkCard.Title>
          <WorkCard.Description>{work.description}</WorkCard.Description>
          <WorkCard.Extra>
            <ul>
              {work.links.map(link => (
                <li>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </WorkCard.Extra>
        </WorkCard>
      ))}
    </Container>
  );
};
