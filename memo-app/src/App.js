import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import WriteMemo from './containers/WriteMemo';

const App = () => {
    return (
        <div>
            <Layout>
                <Header />
                <Layout.Main>
                    <WriteMemo />
                </Layout.Main>
            </Layout>
        </div>
    )
}

export default App;