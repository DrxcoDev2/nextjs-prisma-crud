import {NextResponse, NextRequest} from "next/server";
import {prisma} from "../../../lib/prisma"


export async function GET(request: NextRequest) {

    try {
        const notes = await prisma.note.findMany();
        //console.log(notes)
        return NextResponse.json(notes);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, {status: 500}); //Response error 
                                                                             //Type 500 = Internal Server Error 
        }
    }
}


export async function POST(request: NextRequest) {
    try {
    const {title, content} = await request.json();
    //console.log(title, content)

    const NewNote = await prisma.note.create({
        data: {
            title,
            content
        }
    })

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, {status: 500}); //Response error 
                                                                             //Type 500 = Internal Server Error 
        }
    }
}