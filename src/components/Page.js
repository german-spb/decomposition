import Widgets from './Widgets/Widgets';
import Promo from './Promo/Promo';
import Search from './Search/Search';
import NewsList from './News/NewsList';
import '../style/page.css';

function Page() {
  return (
    <div className="page">
      <div>
        <NewsList />
      </div>

      <div>
        <Search />
      </div>

      <div>
        <Promo
          img={
            'https://cdn.hsmedia.ru/dist/doctorpiter/e4197781.svg'
          }
        />
      </div>

      <div>
        <Widgets />
      </div>
    </div>
  );
}

export default Page;
