import React from 'react';
import Article from './Article'
import Video from './Video'
import New from './New';
import Popular from './Popular';

function List(props) {

    const ComponentWithWrapper = (Component) => {
        function Wrapper(props) {
            if (props.views < 100){
                return <New><Component {...props} /></New>
            } else if (props.views > 1000){
                return <Popular><Component {...props} /></Popular>
            }
            return <Component {...props} />;
        }
        return Wrapper;
    }

    const UpgVideo = ComponentWithWrapper(Video),
    UpgArticle = ComponentWithWrapper(Article)

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <UpgVideo key={Math.random()} {...item} />
                );

            case 'article':
                return (
                    <UpgArticle key={Math.random()} {...item} />
                );
        }

    });
};

export default List;
