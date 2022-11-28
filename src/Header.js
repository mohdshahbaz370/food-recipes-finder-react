const Header = () => {
    const styleHeader = {
        fontFamily: "Trirong, serif",
    }

    return (
        <div style={styleHeader} class="p-5 text-bg-dark text-center">
            <h1>Food Recipes Finder</h1>
            <p>Search for any type of food that you would like to cook.</p>
        </div>
    )
}

export default Header;