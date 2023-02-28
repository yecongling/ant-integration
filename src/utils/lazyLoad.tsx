import React, {Suspense} from "react";
import {Spin} from "antd";

/**
 * 路由懒加载
 * @param Comp 需要访问的组件
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
    return (
        <Suspense
            fallback={
                <Spin size="large" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}/>
            }>
            <Comp/>
        </Suspense>
    );
};
export default lazyLoad;
