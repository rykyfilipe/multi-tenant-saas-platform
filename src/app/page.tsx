import "./globals.css"
import {Button} from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";

export default function Home() {
	return <div className="flex flex-col gap-y-4 p-4">
		<div>
			<Button variant="elevated">
				I am a button
			</Button>
		</div>
		<div>
			<Input placeholder="What is your name?"/>
		</div>
		<div>
			<Progress value={50}/>
		</div>

		<div>
			<Textarea placeholder="What is your email address?"/>
		</div>

	</div>
}
