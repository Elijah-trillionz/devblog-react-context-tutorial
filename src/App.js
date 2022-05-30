import './App.css';
import './App.dark.css';
import Header from './components/Header';
import PostList from './components/PostList';
import { AppContext, AppProvider } from './contexts/AppState';

function App() {
  return (
    <AppProvider>
      <Header />
      <AppContext.Consumer>
        {({ posts, darkTheme, setDarkTheme }) => (
          <>
            <main className={`${darkTheme ? 'dark' : ''}`}>
              <h3>
                New Posts: <span>{posts.length} posts</span>
              </h3>
              <PostList />
            </main>

            <footer
              onClick={() => setDarkTheme(!darkTheme)}
              className={`${darkTheme ? 'dark' : ''}`}
            >
              <i className={`fas fa-${darkTheme ? 'sun' : 'moon'}`}></i>
            </footer>
          </>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}

export default App;
