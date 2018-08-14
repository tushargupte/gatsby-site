import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps </h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">watch the video</Link>
        <div className="Logos">
          <img src="http://www.tushargupte.com/Files/React/logo-sketch.png" width="50" />
          <img src="http://www.tushargupte.com/Files/React/logo-figma.png" width="50" />
          <img src="http://www.tushargupte.com/Files/React/logo-framer.png" width="50" />
          <img src="http://www.tushargupte.com/Files/React/logo-invision.png" width="50" />
          <img src="http://www.tushargupte.com/Files/React/logo-react.png" width="50" />
          <img src="http://www.tushargupte.com/Files/React/logo-swift.png" width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
        <div className="CardGroup">
        <Card 
          title="Design Systems"
          text="10 Sections"
          image="http://www.tushargupte.com/Files/React/wallpaper.jpg" 
        />
        <Card 
          title="React for Designers"
          text="12 Sections"
          image="http://www.tushargupte.com/Files/React/wallpaper2.jpg" 
        />
        <Card 
          title="Sound Design"
          text="5 Sections"
          image="http://www.tushargupte.com/Files/React/wallpaper3.jpg" 
        />
        <Card 
          title="ARKit 2"
          text="10 Sections"
          image="http://www.tushargupte.com/Files/React/wallpaper4.jpg" 
        />
        </div>
    </div>
    <Section
      image="http://www.tushargupte.com/Files/React/wallpaper2.jpg"
      logo="http://www.tushargupte.com/Files/React/logo-react.png"
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell 
      title={cell.title}
      image={cell.image}
      />
    ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage