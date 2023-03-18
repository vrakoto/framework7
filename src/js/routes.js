import HomePage from '../pages/home.f7';

import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

/* import TypeList from "../pages/Types/list.f7";
import TypeDetail from "../pages/Types/details.f7";
import TypeCreate from "../pages/Types/create.f7";
import TypeUpdate from "../pages/Types/update.f7"; */

import TachesList from "../pages/Taches/list.f7";
import LaTache from "../pages/Taches/tache.f7";
import TacheCreate from "../pages/Taches/create_tache.f7";
import ListTachesCreate from "../pages/Taches/create_list.f7";
import TacheUpdate from "../pages/Taches/update.f7";

import TacheDetail from "../pages/Taches/detail.f7";

var routes = [
    {
        path: '/',
        component: HomePage,
    },
    // {
    //   path: '/type/list/',
    //   component: TypeList,
    // },
    // {
    //   path: '/type/detail/:idType',
    //   component: TypeDetail,
    // },
    // {
    //   path: '/type/create/',
    //   component: TypeCreate,
    // },
    // {
    //   path: '/type/update/:idType',
    //   component: TypeUpdate,
    // },


    {
        path: '/taches/list/',
        component: TachesList,
    },
    {
        path: '/taches/tache/:idTache',
        component: LaTache,
    },
    {
        path: '/tache/create/',
        component: ListTachesCreate,
    },
    {
        path: '/tache/update/:idTache',
        component: TacheUpdate,
    },
    {
        path: '/tache/detail/:idTache',
        component: TacheDetail,
    },

    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '/request-and-load/user/:userId/',
        async: function ({ router, to, resolve }) {
            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            // User ID from request
            var userId = to.params.userId;

            // Simulate Ajax Request
            setTimeout(function () {
                // We got user data from request
                var user = {
                    firstName: 'Vladimir',
                    lastName: 'Kharlampidi',
                    about: 'Hello, i am creator of Framework7! Hope you like it!',
                    links: [
                        {
                            title: 'Framework7 Website',
                            url: 'http://framework7.io',
                        },
                        {
                            title: 'Framework7 Forum',
                            url: 'http://forum.framework7.io',
                        },
                    ]
                };
                // Hide Preloader
                app.preloader.hide();

                // Resolve route to load page
                resolve(
                    {
                        component: RequestAndLoad,
                    },
                    {
                        props: {
                            user: user,
                        }
                    }
                );
            }, 1000);
        },
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];

export default routes;