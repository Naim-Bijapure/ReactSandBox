
const WithOutLifeCycle=({stars})=>{
    return (<div>
        this is without life cycle but with state
        and i get the stars of nextjs as {stars}
    </div>)
}
WithOutLifeCycle.getInitialProps=async({req})=>{
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count }
}
export default WithOutLifeCycle;