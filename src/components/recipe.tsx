import React from "react";

import {Refrigerator, Utensils} from "lucide-react";
import {cn} from "../lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import {Label} from "./ui/label";
import {Checkbox} from "./ui/checkbox";

type CardProps = React.ComponentProps<typeof Card>

export function RecipeComponent({className, ...props}: CardProps) {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-4 p-4">

            <Card className="w-full col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-4"><Refrigerator className="mr-4"/> Beef and cheese
                        pasta</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-purple-700 object-cover w-full h-48 lg:h-48 lg:w-96  rounded-lg lg:float-left mr-4 mb-4"></div>
                    <p>
                        Tender beef cooked in a rich tomato sauce, topped with creamy cheese and a hint of wine.
                        This hearty pasta dish is sure to satisfy any appetite. The perfect combination of flavors
                        and textures,
                        it's a meal fit for kings and queens (or pasta lovers).
                    </p>
                </CardContent>


            </Card>
            <Card className={cn("w-full row-start-2 h-auto", className)} {...props}>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-4"><Refrigerator
                        className="mr-4"/> Ingredients</CardTitle>
                    <CardDescription>A tasty treat</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox></Checkbox>
                        <Label>12 oz (340g) pasta of your choice (e.g. spaghetti or linguine)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox></Checkbox>
                        <Label>1 lb (450g) ground beef</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox></Checkbox>
                        <Label>1/2 cup (120ml) red wine (such as Cabernet Sauvignon or Chianti)</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox></Checkbox>
                        <Label>1/2 cup (120ml) red wine (such as Cabernet Sauvignon or Chianti)</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox></Checkbox>
                        <Label>1/2 cup (120g) grated Parmesan cheese</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox></Checkbox>
                        <Label>Salt and pepper to taste</Label>
                    </div>
                </CardContent>
            </Card>
            <Card className={cn("w-full row-start-3 lg:row-start-2", className)} {...props}>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-4"><Refrigerator
                        className="mr-4"/> Ingredients</CardTitle>
                    <CardDescription>A tasty treat</CardDescription>
                    <ol className="list-decimal">
                        <li>Cook the pasta according to package instructions until al dente. Drain and set aside.</li>
                        <li>In a large skillet, cook the ground beef over medium-high heat until browned, breaking it up into small pieces as it cooks.</li>
                        <li>Add the red wine to the skillet and stir to deglaze, scraping up any browned bits from the bottom of the pan. Let the wine reduce by half.</li>
                        <li>Add the marinara sauce to the skillet and stir to combine with the beef and wine. Bring the mixture to a simmer and cook for 5-10 minutes, stirring occasionally. Season with salt and pepper to taste.</li>
                        <li>In a small bowl, mix the Parmesan cheese with a splash of the pasta cooking water (you can also use heavy cream or half-and-half if you prefer). Stir until the cheese is fully melted and the sauce is smooth.</li>
                        <li>Add the cooked pasta to the skillet with the tomato sauce and beef, and toss everything together until the pasta is well coated.</li>
                        <li>Season with salt and pepper to taste, then transfer the pasta to a serving dish. Sprinkle additional Parmesan cheese on top (if desired) and garnish with chopped fresh basil leaves (if desired). Serve immediately and enjoy!</li>
                    </ol>
                </CardHeader>
                <CardContent className="grid gap-4">

                </CardContent>
            </Card>

        </div>
    );
}