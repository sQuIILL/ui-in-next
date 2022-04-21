import Link from 'next/link'
import style from './Layout.module.css'
import useSWR from 'swr';
import fetcher from '../app/fetcher'

function simplifyCategories(categories) {
    const baseCategoryId = categories.find(e => e.parent_id === null).id
    const rootCategories = categories.filter(e => e.parent_id === baseCategoryId).sort((a, b) => a.position - b.position)
    return rootCategories.map(rootCategory => ({
        ...rootCategory,
        subCategories: categories.filter(subCategory => subCategory.parent_id === rootCategory.id)
    }));
}

function Navbar() {
    const { data } = useSWR('/categories.json', fetcher)
    const categories = data ? simplifyCategories(data) : []
    return (
        <nav>
            <div className="basis-full container min-w-full">
                <div className="flex w-full mt-5 justify-center bg-stone-800 hidden md:flex">
                    {categories?.map((categorry, key) => (
                        <div className={`${style.dropdown} py-1`} key={key}>
                            <Link href={`/kategorie/${categorry.slug}`} passHref>
                                <button className={`${style.dropbtn} px-5`}>
                                    {categorry.name}
                                </button>
                            </Link>
                            <div className={`${style.dropdownContent} sm:hidden`}>
                                {categorry?.subCategories?.map((subCategory, keyx) => (
                                    <Link key={keyx} href={`/kategorie/${subCategory.slug}`} passHref>
                                        {subCategory.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div >
            </div>
        </nav>
    )
}

export default Navbar