import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {heroService} from "../../axios.service/services";
import Character from "../../components/Character/Character";
import css from "./CharactersPage.module.css"

const CharactersPage = () => {
    const {search} = useLocation();
    const navigate = useNavigate();

    const [characters, setCharacters] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const currentPage = search ? +search.split('page=')[1] : 1;
        setPage(currentPage)
        heroService.getAll(currentPage).then(value => setCharacters(value))
    }, [search])

    if (!characters) {
        return (
            <div>
                Page not found
            </div>
        )
    }

    return (
        <div>
            <div className={css.wrap}>
                {
                characters.results.map(item => <Character key={item.id} character={item}/>)
                }
            </div>
            <div className={css.btns}>
                <input type="button" value={"prev"}
                       disabled={page <= 1}
                       onClick={() => navigate(`/character?page=${page - 1}`)}/>
                {page}
                <input type="button" value={"next"}
                       disabled={page >= characters.info.pages}
                       onClick={() => navigate(`/character?page=${page + 1}`)}/>
            </div>
        </div>
    );
};

export default CharactersPage;