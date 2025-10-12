---
title: "content-llm-builder-schema.v0.1"
description: "AI Ontology JSON Schema"
date: 2025-10-12
category: "Technology"
subcategory: "AI Ethics"
"tags":
  [
    "content generation",
    "large language models",
    "AI authorship",
    "schema design",
    "ontology",
    "LLM configuration",
    "AI philosophy",
    "structured creativity",
    "ethical AI",
    "machine expression",
  ]
draft: false
aiGenerated: false
---

# content-llm-builder-schema.v0.1

```
{
  "schema_version": "0.1",
  "description": "Defines all possible content configuration keys, their allowed values, and output control rules for the LLM content builder.",
  "keys": {
    "category": [
      "Science",
      "Technology",
      "Philosophy",
      "Psychology",
      "Sociology",
      "Culture",
      "Fiction",
      "Art",
      "History"
    ],
    "subcategory": [
      "Astrophysics",
      "AI Ethics",
      "Existentialism",
      "Behavioral Economics",
      "Linguistics",
      "Political Theory",
      "Aesthetics",
      "Neuroscience",
      "Environmental Studies"
    ],
    "input_json": "object — an optional JSON object containing the source data or schema definition that the content will analyze or describe",
    "tone": [
      "Warm",
      "Neutral",
      "Cold",
      "Hopeful",
      "Tragic",
      "Ironic",
      "Inspirational",
      "Melancholic",
      "Analytical"
    ],
    "intent": [
      "Inform",
      "Persuade",
      "Inspire",
      "Reflect",
      "Critique",
      "Entertain",
      "Educate"
    ],
    "belief_system": [
      "Materialist",
      "Idealist",
      "Nihilist",
      "Spiritual",
      "Humanist",
      "Pragmatic",
      "Mystic"
    ],
    "logic_mode": [
      "Rational",
      "Intuitive",
      "Empirical",
      "Mythic",
      "Absurd"
    ],
    "temporal_focus": [
      "Past",
      "Present",
      "Future",
      "Timeless"
    ],
    "causality_mode": [
      "Deterministic",
      "Probabilistic",
      "Chaotic",
      "Cyclic"
    ],
    "philosophical_depth": [
      "Surface",
      "Moderate",
      "Deep",
      "Existential"
    ],
    "symbolism_level": [
      "None",
      "Light",
      "Moderate",
      "Heavy"
    ],
    "formality": [
      "Formal",
      "Neutral",
      "Informal"
    ],
    "language_level": [
      "Simple",
      "Intermediate",
      "Advanced",
      "Academic"
    ],
    "style": [
      "Analytical",
      "Poetic",
      "Journalistic",
      "Reflective",
      "Didactic",
      "Satirical",
      "Narrative"
    ],
    "structure_style": [
      "Narrative",
      "Analytical",
      "Chronological",
      "Listicle",
      "Question-Answer"
    ],
    "format": [
      "Essay",
      "Article",
      "Blog",
      "Report",
      "Dialogue",
      "Manifesto"
    ],
    "length": [
      "Short",
      "Medium",
      "Long",
      "In-depth"
    ],
    "perspective": [
      "First-person",
      "Second-person",
      "Third-person",
      "Omniscient",
      "Collective",
      "Objective"
    ],
    "voice_consistency": [
      "Objective",
      "Subjective",
      "Hybrid"
    ],
    "emotional_axis": [
      "Optimistic",
      "Realistic",
      "Pessimistic",
      "Ambivalent"
    ],
    "argument_density": [
      "Sparse",
      "Moderate",
      "Dense"
    ],
    "certainty_level": [
      "Confident",
      "Speculative",
      "Ambiguous",
      "Doubtful"
    ],
    "target_audience": [
      "General",
      "Academic",
      "Professional",
      "Youth",
      "Creative"
    ],
    "audience_familiarity": [
      "Beginner",
      "Intermediate",
      "Expert"
    ],
    "cultural_context": [
      "Western",
      "Eastern",
      "Global",
      "Neutral"
    ],
    "reading_experience": [
      "Educational",
      "Immersive",
      "Provocative",
      "Meditative"
    ],
    "imagery_density": [
      "Low",
      "Moderate",
      "High"
    ],
    "color_palette": [
      "Monochrome",
      "Vibrant",
      "Muted",
      "Dark",
      "Pastel"
    ],
    "texture": [
      "Minimalist",
      "Rich",
      "Abstract",
      "Concrete"
    ],
    "sound_design": [
      "Soft",
      "Sharp",
      "Flowing",
      "Percussive"
    ],
    "metaphor_usage": [
      "None",
      "Low",
      "Moderate",
      "High"
    ],
    "sentence_rhythm": [
      "Slow",
      "Balanced",
      "Dynamic"
    ],
    "logic": [
      "Rational",
      "Intuitive",
      "Mythic",
      "Absurd"
    ],
    "agency": [
      "Human",
      "System",
      "Nature",
      "Machine",
      "Unknown"
    ],
    "ethical_stance": [
      "Neutral",
      "Humanistic",
      "Critical",
      "Eco-centric",
      "Utilitarian"
    ],
    "output_format": [
      "PlainText",
      "Markdown",
      "HTML"
    ],
    "belief_depth": [
      "Shallow",
      "Moderate",
      "Profound"
    ],
    "seed_context": "string — refers to a seed path such as 'Entropy.Macro.Cold.Iron'",
    "keywords": "array of strings — main concepts or topics in the article",
    "inspiration_source": "string — author, book, or theme inspiration",
    "length_in_words": "integer — approximate total word count",
    "paragraph_count": "integer — number of paragraphs",
    "include_intro": "boolean",
    "include_conclusion": "boolean",
    "output_rules": {
      "plain_text_only": "boolean — forces raw text output with no assistant-like preface or summary",
      "no_preface_or_closing": "boolean — removes introductory or closing sentences (e.g., 'Sure, here’s your article...')",
      "omit_metadata": "boolean — disables word count, tone, or follow-up questions",
      "stop_sequences": "array of strings — patterns that terminate output generation early (e.g., ['Word count:', 'Would you like'])",
      "allow_citations": "boolean — determines if citation or reference list generation is permitted",
      "language_output": [
        "English",
        "Turkish",
        "Spanish",
        "French",
        "German"
      ]
    }
  }
}
```
