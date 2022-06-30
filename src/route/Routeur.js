import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Css
import '../css/style.css'

// Loader
import ThreeDots from '../components/loader/threedots'

// Layout
import LayoutNav from '../layout/navbar/layoutNav'

// 404
import NotFound from './NotFound'

// Pages
const Main = lazy(() => import('../pages/main'))
const Contact = lazy(() => import('../pages/contact'))
const Cv = lazy(() => import('../pages/cv'))
const Projets = lazy(() => import('../pages/projets'))

const Routeur = () => (
    <Suspense fallback={<ThreeDots />}>
        {/* <Suspense fallback={<p>Chargement ...</p>}> */}
        <Router>
            <LayoutNav>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/cv" component={Cv} />
                    <Route exact path="/projets" component={Projets} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </LayoutNav>
        </Router>
    </Suspense>
)

export default Routeur
