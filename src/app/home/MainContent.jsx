import React from 'react';
import scence from '../../assets/download.jpeg';
import { Article } from './Article';
import { articles } from './data/article';
export function MainContent() {

    const [ingredients, setIngredients] = React.useState(['chicken', 'fish', 'noddle']);
    const listArticle = articles.map(article => (
        <Article
            key={article.id}
            {...article}
        />
    ));
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        if (newIngredient) {
            setIngredients(prev => [...prev, newIngredient]);
        }
    }
    const intro = function () {
        return (
            <section className="intro">
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </section>
        )
    }
    const articleContainer = function () {
        return (
            <section className="articles">
                <h1>Articles About React</h1>
                <ul>
                    {listArticle}
                </ul>
            </section>
        )
    }
    function handleClick() {
        alert("Hello my master");
    }
    const alerts = function () {
        return (
            <section className="buttonSection">
                <button type='button' onClick={handleClick}>Click me</button>
            </section>
        );
    }
    const showForm = function () {
        return (
            <section className="formAddRecipe">
                <form onSubmit={handleSubmit} className="add-ingredient-form">
                    <input
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        name="ingredient"
                    />
                    <button type="submit">Add ingredient</button>
                </form>
                <ul>
                    {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </section>
        );
    }
    const [count, setCount] = React.useState(0);
    function add(){
        setCount(prev => prev + 1);
    }
    const countPage = function(){
        return(
            <section className="Count">
                <p>{count}</p>
                <button onClick={add}>Click to Count</button>
            </section>
        )
    }
    return (
        <main>
            {intro()}
            {articleContainer()}
            {alerts()}
            {showForm()}
            {countPage()}
        </main>
    );
}