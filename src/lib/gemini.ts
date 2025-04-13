import  {Document} from "@langchain/core/documents"

export async function summariseCode(doc  : Document) {
    const summary = await aiSummarieseCommit(doc.pageContent) 
    return summary 
    
}