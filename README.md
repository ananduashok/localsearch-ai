# LocalSearchAI

**Your documents. Your knowledge. Your AI.**

An open-source, self-hosted AI search and chat platform for PDFs, runbooks, notes, and personal files.

> Early development: this repository currently contains the initial web-app scaffold. Document ingestion and RAG features will be added incrementally.

## Stack
- Frontend: React + Vite + TypeScript
- Backend: Python + FastAPI
- Planned RAG: LangChain, ChromaDB, configurable embeddings and LLM providers

## Requirements
Python 3.11+, Node.js 20+, npm, Git.

## Run locally

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows PowerShell: .venv\\Scripts\\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
Health endpoint: http://127.0.0.1:8000/api/health

### Frontend (second terminal)
```bash
cd frontend
npm install
npm run dev
```
Open the local URL printed by Vite, usually http://localhost:5173.

## Privacy
- Never commit API keys, `.env` files, personal documents, or vector database contents.
- When cloud LLMs are enabled, relevant retrieved text is sent to the selected provider.
- This early scaffold is not yet suitable for sensitive documents; authentication and production security are not implemented.

## License
MIT. See [LICENSE](LICENSE).
