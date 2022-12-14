import React from "react";
import { Link } from "react-router-dom";
import cvPdf from "../../../assets/docs/cv.pdf";
import { FullscreenDiv, MyIcon, RowDiv } from "../../commonComponents";
import { cv, linkedin_transparent, github } from "../../../assets/customIcons";
import "./styles.css";

export function HamburgerMenu({
  menuOpen,
  setMenuOpen,
  d,
}: {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  d?: boolean;
}) {
  return (
    <>
      <div
        style={{
          ...styles.hamburgerContainer,
          ...{
            border: d ? "1px solid black" : undefined,
          },
        }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger-container"
      >
        <hr
          style={styles.line}
          className={`top-line ${menuOpen ? "fade-left" : "fade-left-reverse"}`}
        />
        <hr
          style={styles.line}
          className={`middle-line ${
            menuOpen ? "rotate-clockwise" : "rotate-clockwise-reverse"
          }`}
        />
        <hr
          style={styles.line}
          className={`hidden-middle-line ${
            menuOpen
              ? "rotate-counter-clockwise"
              : "rotate-counter-clockwise-reverse"
          }`}
        />
        <hr
          style={styles.line}
          className={`bottom-line ${
            menuOpen ? "fade-right" : "fade-right-reverse"
          }`}
        />
      </div>

      <FullscreenDiv
        style={{
          ...styles.menuContainer,
          ...{ pointerEvents: menuOpen ? "auto" : "none" },
        }}
        className={`menu-container ${
          menuOpen ? "fade-background" : "fade-background-reverse"
        }`}
      >
        <>
          <div style={styles.menu}>
            <Link
              to="/software"
              onClick={() => setMenuOpen(false)}
              style={styles.link}
              className={menuOpen ? "fade-down-reverse" : "fade-down"}
            >
              <h1 style={styles.menuItem} className="secondary">
                Software
              </h1>
            </Link>
            <Link
              to="/business"
              onClick={() => setMenuOpen(false)}
              style={styles.link}
              className={menuOpen ? "fade-down-reverse" : "fade-down"}
            >
              <h1 style={styles.menuItem} className="secondary">
                Business
              </h1>
            </Link>
            <Link
              to="/other"
              onClick={() => setMenuOpen(false)}
              style={styles.link}
              className={menuOpen ? "fade-down-reverse" : "fade-down"}
            >
              <h1 style={styles.menuItem} className="secondary">
                Other
              </h1>
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              style={styles.link}
              className={menuOpen ? "fade-down-reverse" : "fade-down"}
            >
              <h1 style={styles.menuItem} className="secondary">
                About
              </h1>
            </Link>
          </div>

          <div style={styles.footer} className="hamburger-menu-footer">
            <h4
              style={{ marginBottom: 16, fontSize: "3vh" }}
              className="secondary"
            >
              joshuakgao@gmail.com
            </h4>
            <RowDiv>
              <a
                style={styles.footerLink}
                href="https://github.com/tugonbob"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MyIcon className="icon" icon={github} size="2xl" monochrome />
              </a>
              <a
                style={styles.footerLink}
                href="https://www.linkedin.com/in/joshua-gao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MyIcon
                  className="icon"
                  icon={linkedin_transparent}
                  size="2xl"
                  monochrome
                />
              </a>
              <a
                style={styles.footerLink}
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MyIcon className="icon" icon={cv} size="2xl" monochrome />
              </a>
            </RowDiv>
          </div>
        </>
      </FullscreenDiv>
    </>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  hamburgerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "2vw",
    marginTop: "2vh",
    marginBottom: "2vh",
    pointerEvents: "auto",
    zIndex: 11,
  },
  line: {
    border: "1px solid black",
    height: 0,
    width: 32,
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginRight: 32,
    zIndex: 10,
    backgroundColor: "#f7f7f7",
    border: "1px black solid",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 32,
    marginTop: "20vh",
  },
  menuItem: {
    fontSize: "9.5vh",
  },
  link: {
    textDecorationLine: "none",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 32,
    marginBottom: 16,
  },
  footerLink: {
    marginLeft: 8,
  },
};
