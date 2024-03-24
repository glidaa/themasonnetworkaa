import { useState, useContext } from "react"
import NewsContext from "@/contexts/NewsContext"
import ArticleDetails from "@/components/ArticleDetails"
import { Modal } from 'flowbite-react';
import Button from "@/components/Button"
import EditableLabel from 'react-editable-label';

import iconDelete from "@/assets/icon-delete.svg"

const AdminPanel = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedArticleIndex, setSelectedArticleIndex] = useState<number>(0);

    const news = useContext(NewsContext)

    const articleClickedHandler = (i: number) => {
        setSelectedArticleIndex(i);
        setOpenModal(true);
    }

    return (
        <div className="container">
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">{news[selectedArticleIndex].title}</h1>
                        <ArticleDetails article={news[selectedArticleIndex]} showAvatar={true} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <ul className="flex flex-col gap-3">
                        {
                            news[selectedArticleIndex].jokes.map((joke, index) => (
                                <li key={index} className="flex gap-4 items-center">
                                    <div className="grow">
                                        <EditableLabel initialValue={joke} save={value => console.log(value)} />
                                    </div>
                                    <button className="w-8 h-8 p-[4px] rounded-full hover:bg-gray-300 transition-colors">
                                        <img src={iconDelete} alt="Delete Joke" />
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </Modal.Body>
                <Modal.Footer className="flex justify-between">
                    <small>
                        <i>Hint: Double tab to edit joke</i>
                    </small>
                    <Button>Save</Button>
                </Modal.Footer>
            </Modal>
            <header className="flex justify-center mb-8">
                <p className="bg-gray-300 px-4 py-1 rounded-md border border-gray-400">
                    <strong>
                        {news.length}
                    </strong> News Articles</p>
            </header>

            <ul>
                {
                    news.map((article, index) => (
                        <li key={article.id} className="flex flex-col gap-2 pt-2">

                            <button className="flex gap-4 items-center hover:bg-gray-100 transition-colors rounded-md" onClick={() => articleClickedHandler(index)}>
                                <img className="h-[70px] aspect-video object-fill rounded-md" src={article.image} alt={article.title} />
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <h2>{article.title}</h2>
                                        <small className="bg-primary-red-light rounded-xl px-2 py-[1px]">+3 Jokes</small>
                                    </div>
                                    <ArticleDetails article={article} showAvatar={false} />
                                </div>
                            </button>
                            <hr />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AdminPanel