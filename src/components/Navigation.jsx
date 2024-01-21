"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
import dumplogo from "../../public/images/logo.png"
import Image from "next/image";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="py-2 px-3 m-0 min-h-[8vh] drop-shadow-lg flex justify-between md:min-h-[5vh]">
      <Navbar.Brand>
        <Link className="flex flex-grow md:px-3 space-x-1.5 md:space-x-2.5" style={{ textDecoration: "none" }} href="/">
            <Image src={dumplogo.src} height={75} width={75} alt="dumplogo" className="mr-3"/>
            <p className="flex items-center bg-clip-text text-transparent text-4xl bg-gradient-to-b from-textpurple from-20% via-textmidpink via-80% to-textpink to-100% mt-2 hover:opacity-0.8">Lung Lens</p>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      </Navbar.Toggle>

      <Navbar.Collapse id="navbar-nav" className="items-center justify-end md:mr-8 flex">
        <Nav className="flex items-center w-full md:w-auto space-x-8">
          <Nav.Link as={Link} href="/model" className="text-white md:!text-2xl">
            MODEL
          </Nav.Link>
          <Nav.Link as={Link} href="/resources" className="text-white md:!text-2xl">
            INFO
          </Nav.Link>
          <Nav.Link as={Link} href="/resources" className="text-white md:!text-2xl">
            RESOURCES
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;