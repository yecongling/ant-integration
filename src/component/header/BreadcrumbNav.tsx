import React from "react";
import {Breadcrumb} from "antd";

const BreadcrumbNav: React.FC = () => {
  return (
    <>
      <Breadcrumb items={[
        {
          title: 'Location',
        },
        {
          href: '',
          title: 'Application Center',
        },
        {
          href: '',
          title: 'Application List',
        }
      ]}>
      </Breadcrumb>
    </>
  )
}
export default BreadcrumbNav;