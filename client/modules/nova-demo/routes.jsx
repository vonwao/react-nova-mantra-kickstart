import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
} from '/client/configs/theme.jsx';

import './demo-app.jsx'
import PostList from './demo-component.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(LayoutDefault,);

  FlowRouter.route('/nova-demo', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

}
