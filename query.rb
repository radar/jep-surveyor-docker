query = """
  query {
    testField
  }
"""
results = SurveyorSchema.execute(query: query)
p results.to_h
