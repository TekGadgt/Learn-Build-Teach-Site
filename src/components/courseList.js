import React from "react";
import Card from "./card";
import "../sass/card.scss";
import vsCodeCover from "../images/learn-vs-code-cover.svg";
import coreFundamentalsCover from "../images/core-fundamentals-cover.svg";
import chatAppCover from "../images/chat-app-cover.svg";
import { StaticQuery, graphql } from "gatsby";

const CourseList = props => {
  console.log("***************************", props);
  return (
    <StaticQuery
      query={coursesQuery}
      render={data => (
        <div className="card-list">
          {data.allMarkdownRemark.edges.map(course => (
            <Card
              title={course.node.frontmatter.title}
              subtitle={course.node.frontmatter.description}
              imgSrc={vsCodeCover}
              overlayUrl={course.node.frontmatter.url}
              key={course.node.frontmatter.id}
            />
          ))}
        </div>
      )}
    />
  );
};

export default CourseList;

export const coursesQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            path
            description
            id
            url
          }
        }
      }
    }
  }
`;
