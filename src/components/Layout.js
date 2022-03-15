import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../assets/sass/grayscale.scss";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content:
                    "Music Moves. A Dj and music enthusiast with an eclectic taste, Dj Maxx will tailor your experience specific to your event.",
                },
                {
                  name: "keywords",
                  content:
                    "site, web, music, dj, events, weddings, private parties, corporate",
                },
              ]}
            >
              <html lang="en" />
              <html lang="en" />
              {/* <!-- Open Graph / Facebook --> */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://djmaxxdc.com/" />
              <meta property="og:title" content="DJ Maxx" />
              <meta
                property="og:description"
                content="A Dj and music enthusiast with an eclectic taste, Dj Maxx will tailor your experience specific to your event."
              />
              <meta
                property="og:image"
                content="https://www.sandbox.djmaxxdc.com/static/maxxbw3-ea61fa4f6cd38c96c51939061538abfd.png"
              />
              {/* <!-- Twitter --> */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://djmaxxdc.com/" />
              <meta property="twitter:title" content="DJ Maxx" />
              <meta
                property="twitter:description"
                content="A Dj and music enthusiast with an eclectic taste, Dj Maxx will tailor your experience specific to your event."
              />
              <meta
                property="twitter:image"
                content="https://www.sandbox.djmaxxdc.com/static/maxxbw3-ea61fa4f6cd38c96c51939061538abfd.png"
              />
            </Helmet>
            <div className={"page-top"}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
