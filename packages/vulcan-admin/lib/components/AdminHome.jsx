import React from 'react';
import { Components, withCurrentUser, AdminColumns } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import { withRouter } from 'react-router';

import '../modules/columns.js';

const AdminHome = ({ currentUser, match }) => {
  return <div className="admin-home page">
    <Components.ShowIf check={Users.isAdmin} document={currentUser} failureComponent={<p className="admin-home-message"><FormattedMessage id="app.noPermission" /></p>}>
      <Components.Datatable
        collection={Users}
        columns={AdminColumns}
        options={{
            fragmentName: 'UsersAdmin',
            terms: {view: 'usersAdmin', query: match.params.id},
        }}
        showEdit={true}
        query={match.params.id}
      />
    </Components.ShowIf>
  </div>;
};

export default withRouter(withCurrentUser(AdminHome));
