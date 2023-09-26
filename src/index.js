import { ZenEngine } from "@gorules/zen-engine"
import fs from 'fs/promises'
import path from "path"

const engine = async (input) => {
  const content = await fs.readFile(path.join('src', 'jdm_graph.json'))
  const engine = new ZenEngine()

  const decision = engine.createDecision(content)
  const result = await decision.evaluate(input)

  console.log(result)
}

engine({ type: 'part', qty: 2 })
engine({ type: 'part', qty: 23 })
engine({ type: 'part', qty: 123 })
engine({ type: 'pro', qty: 1 })
engine({ type: 'pro', qty: 23 })
engine({ })
