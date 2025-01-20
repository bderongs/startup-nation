import Link from 'next/link';

export default function ExtractPage() {
    return (
        <div className="min-h-screen bg-[#EAE7D5] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/startup-nation"
                        className="text-[#1a2d5d] hover:text-[#1a2d5d]/80 transition-colors flex items-center gap-2 font-fjalla"
                    >
                        ← Retour au livre
                    </Link>
                </div>

                <h1 className="text-4xl font-bold text-black mb-8 font-fjalla">
                    Start-Up Nation - Extrait
                </h1>

                <div className="bg-white/50 p-8 rounded-lg border border-black/10">
                    <div className="prose prose-lg max-w-none text-black/90 font-garamond px-4 sm:px-8">
                        <h2 className="font-fjalla text-2xl mb-8">Chapitre 1 : J'en ai marre de travailler dans le vent</h2>

                        {/* Style dialogue */}
                        <div className="mb-4">
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Thomas, tu as cinq minutes ? fait une voix derrière lui
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-justify indent-8">
                                Thomas tourne la tête et aperçoit Michel, responsable du département « qualité », son chef. Il est 10 heures, l'Open Space est très bruyant, parcouru par des dizaines de groupes se rendant ou revenant de la machine à café. Thomas avait donc son casque sur les oreilles et n'a pas entendu son chef arriver. Heureusement qu'il était réellement en train de travailler et non de prévoir ses prochaines vacances.
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Oui, bien sûr, répond-il
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Dans mon bureau, précise Michel
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Entendu, je prends mon ordi, fait Thomas en débranchant son ordinateur portable
                            </p>
                        </div>

                        {/* Suite du dialogue */}
                        <div className="mb-4">
                            <p className="text-justify indent-8">
                                Les quelques mètres qui le séparent du bureau de Michel suffisent à Thomas pour se sentir scruté par ses collègues. Il baisse la tête et rentre dans le bureau.
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Assieds-toi, dit Michel en désignant la petite table de réunion dans le coin du bureau, avec vue sur Paris depuis la Défense.
                            </p>
                            <p className="text-justify indent-8">
                                À peine Thomas a-t-il posé son ordinateur que Michel le rejoint et commence :
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> J&apos;aimerais que l&apos;on discute de ta présentation pour la réunion de mardi prochain
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Entendu, répond Thomas d&apos;une voix tendue, tu as encore des remarques ?
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> En fait, commence Michel, on va changer d&apos;approche. J&apos;en ai discuté ce matin avec Stéphane. Le sujet est sensible, il faut que l&apos;on soit malins. On va reporter la discussion.
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Et donc on présente quoi mardi ?
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Un point général sur les projets du département, classique, tout va bien, on avance sur nos projets.
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> On ne mentionne pas du tout le nouveau logiciel de gestion ?
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Non, attendons, et on en reparle plus tard. Je sais que le sujet te tient à cœur, mais ce n&apos;est pas le moment, tu comprends ?
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Oui, bien sûr, fait Thomas en se levant.
                            </p>
                        </div>

                        <p className="text-justify indent-8 mb-4">
                            Cinq minutes plus tard Thomas est dans la salle café, face à la machine. Il prend son téléphone et envoie un message :
                        </p>

                        {/* Style messages textos */}
                        <div className="space-y-3 my-8 max-w-[85%] mx-auto">
                            {/* Message envoyé */}
                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Thomas</span>
                                    Salut Gaëtan, tu es disponible pour déjeuner ? Mon chef vient de tuer mon projet, j&apos;ai besoin d&apos;un gros burger pour faire passer ça.
                                </div>
                            </div>

                            {/* Message reçu */}
                            <div className="flex justify-end">
                                <div className="bg-[#1a2d5d]/10 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Gaëtan</span>
                                    Aha, encore ton fameux Michel ? Pas de soucis pour déjeuner, par contre, j&apos;ai déjà mangé un burger hier, pizza ?
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Thomas</span>
                                    Bof, Sushis ?
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-[#1a2d5d]/10 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Gaëtan</span>
                                    On a déjà fait ça lundi, tu te souviens ?
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Thomas</span>
                                    Ok, va pour ta pizza.
                                </div>
                            </div>
                        </div>

                        {/* Paragraphe narratif */}
                        <div className="mb-4">
                            <p className="text-justify indent-8">
                                Thomas retourne à son bureau avec son café, ignorant les regards interrogatifs de ses collègues. Il est 10 h 30, il partira déjeuner dans une heure, ils éviteront la cohue du midi et son bureau vide montrera à Michel qu'il n'est pas content.
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="text-justify indent-8">
                                À 11 h 35 ils sont les premiers clients de la pizzeria. Gaëtan essaie de détendre Thomas :
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Tu n'as pas bossé pour rien, c'est juste le troisième délai. On dit bien jamais deux sans trois non ? La prochaine sera la bonne.
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> J'en ai marre franchement, répond Thomas en se prenant la tête entre les mains. Ça fait trois ans que je suis dans cette boîte et je ne fais que travailler dans le vent. Je suis sur ce projet depuis six mois, tout le monde dit que c'est une bonne idée, mais personne ne veut prendre la décision. Dès que cela devient sérieux l'un des patrons trouve un prétexte pour le repousser. J'ai l'impression que cette tour de cinquante étages consacre ses journées à faire des réunions et envoyer des mails, sans que rien ne se passe.
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> C'est pareil chez moi, sympathise Gaëtan, ils ont présenté une nouvelle réorganisation ce matin. C'est plus ou moins la même qu'il y a deux ans.
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> C'est pas possible, dramatise Thomas, on ne va pas bosser encore trente ans comme ça ? Je ne veux pas finir comme Michel, désabusé au point de ne plus rien vouloir faire.
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="text-justify indent-8">
                                La discussion est éculée entre eux, ils en parlent à chaque fois. Leurs études d'ingénieurs les ont menés vers des emplois confortables dans lesquels ils s'ennuient déjà. La progression naturelle est de devenir un Michel démotivé, avec une maison de campagne dans laquelle s'enfuir dès le vendredi soir.
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Changeons de sujet, fait Thomas, tu as vu la levée de fonds annoncée par Mobilis ce matin ? Deux-cents millions d'euros pour une simple application de GPS, c'est impensable non ?
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> J'ai vu, confirme Gaëtan, j'ai téléchargé l'appli. Franchement, c'est nul, techniquement ça ne tient pas la route. Mais c'est joli et tu gagnes des points quand tu partages ta position en direct, ça doit en amuser certains.
                            </p>
                            <p className="text-justify leading-relaxed indent-8">
                                <span className="text-[#1a2d5d]">—</span> Deux-cents millions…, fait Thomas.
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="text-justify indent-8">
                                Gaëtan passe le reste du repas à montrer à Thomas tout ce qui ne va pas dans l'application de Mobilis. Des lenteurs, des bugs. Mais les deux doivent avouer que c'est l'application de GPS la plus pratique qu'ils ont vu jusque-là. Une fois qu'on l'a utilisé, impossible de retourner à l'une des anciennes applications. Ils se quittent en se promettant que, si un jour, ils créent leur application, elle provoquera ce fameux effet « Waouh », celui qui garanti que les utilisateurs reviendront.
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="text-justify indent-8">
                                Le soir, chez lui, Thomas repense à sa discussion avec Gaëtan. Il s'imagine diriger une startup et annoncer une levée de fonds de deux-cents millions à son équipe, dans des locaux flambants neufs. Plus il pense à son déjeuner, plus quelque chose d'insaisissable travaille son esprit. Tout à coup, il prend son téléphone :
                            </p>
                        </div>

                        {/* Dernière conversation texto */}
                        <div className="space-y-3 my-8 max-w-[85%] mx-auto">
                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Thomas</span>
                                    Gaëtan, j'ai trouvé l'idée ! LA startup qu'il faut créer.
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-[#1a2d5d]/10 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Gaëtan</span>
                                    Là, à 22 h, devant Netflix ?
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Thomas</span>
                                    Ouais. Tu es dispo pour qu'on s'appelle ?
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-[#1a2d5d]/10 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Gaëtan</span>
                                    Là à 22 h ? Mais je suis devant Netflix
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Thomas</span>
                                    Mets en pause, si tu n'es pas convaincu en 10 minutes je te laisse y retourner.
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-[#1a2d5d]/10 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-garamond">
                                    <span className="text-gray-500 text-sm block mb-1">Gaëtan</span>
                                    Ok, tentons le coup
                                </div>
                            </div>
                        </div>

                        {/* Fin de l'extrait */}
                        <div className="mt-16 border-t border-black/10 pt-8">
                            <p className="italic">
                                Vous souhaitez connaître la suite ? Le livre est disponible...
                            </p>
                            <div className="mt-4">
                                <Link
                                    href="/startup-nation#achat"
                                    className="text-[#1a2d5d] hover:text-[#1a2d5d]/80 transition-colors inline-flex items-center gap-2 font-fjalla"
                                >
                                    Acheter le livre →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 