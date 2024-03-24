const AvatarBadge = ({ name }: { name: string }) => {
    let initials = "U";
    if (!name)
        initials = "U"
    else if (name.length === 1)
        initials = name[0].toUpperCase()
    else
        initials = name[0].toUpperCase() + name[1].toUpperCase()

    return (
        <div className="flex items-center justify-center w-6 h-6 aspect-square rounded-full bg-[#c4b09f] text-white text-xs font-semibold">
            {initials}
        </div>
    );
};
export default AvatarBadge;
