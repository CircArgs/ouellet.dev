import React from "react";
import styled from "styled-components";

const MenuIcon = (props) => {
  return (
    <IconWrapper>
      <input id="menu-114" type="checkbox" />
      <label for="menu-114">
        <div className="menu">
          <div className="menu_part"></div>
          <div className="menu_part"></div>
          <div className="menu_part"></div>
        </div>
      </label>
    </IconWrapper>
  );
};

export default MenuIcon;

const IconWrapper = styled.div`
  #menu-114 {
    display: none;
  }

  .menu {
    transition: all 0.34s;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    cursor: pointer;

    &_part {
      width: 4px;
      height: 4px;
      position: absolute;
      background: ${(props) => props.theme.global.colors["brand-dark"]};
      right: 0;
      margin: auto;
      left: 0;
      border-radius: 4px;
      transition: all 0.34s cubic-bezier(0.4, 0, 0.1, 1.3);
      width: 19;
      top: calc(50% - ((9px)) + -3px);
      &:nth-of-type(1) {
        top: calc(50% - ((9px)) + -3px);
        width: 3.99306px;
      }

      &:nth-of-type(2) {
        top: calc(50% - ((9px)) + 4px);
        width: 3.99306px;
      }

      &:nth-of-type(3) {
        top: calc(50% - ((9px)) + 11px);
        width: 3.99306px;
      }
    }
  }

  input#menu-114:checked + label .menu {
    transform: scale(1.3) rotate(180deg);
  }

  input#menu-114:checked + label .menu .menu_part:nth-of-type(1) {
    transform: rotate(45deg);
    width: 19px !important;
    top: calc(50% - (2px)) !important;
  }

  input#menu-114:checked + label .menu .menu_part:nth-of-type(2) {
    left: 1px !important;
    opacity: 0;
  }

  input#menu-114:checked + label .menu .menu_part:nth-of-type(3) {
    transform: rotate(-45deg);
    width: 19px !important;
    top: calc(50% - (2px)) !important;
  }
`;
