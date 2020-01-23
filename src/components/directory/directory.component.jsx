import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <React.Fragment>
      <div className="directory-menu">
        {sections.map(({ id, ...allSectionProps }) => (
          <MenuItem key={id} {...allSectionProps} />
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
