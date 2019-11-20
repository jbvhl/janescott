import React from "react";
import { Link } from "react-router-dom";

class Registry extends React.Component {
  render() {
    return (
      <div>
        <h1>Registry</h1>
        <a
          target="_blank"
          href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=547597452&eventType=Wedding&pwsurl="
        >
          Bed Bath {`&`} Beyond
        </a>
        <br />
        <a
          target="_blank"
          href="https://www.target.com/gift-registry/giftgiver?registryId=7068eff869f54329879281100cfdafbd&lnk=registry_custom_url"
        >
          {" "}
          Target
        </a>
      </div>
    );
  }
}

export default Registry;
