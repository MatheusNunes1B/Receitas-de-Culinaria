const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Carrega variáveis do .env (precisa ser a PRIMEIRA linha)
require('dotenv').config();

const app = express();

// Agora usa as variáveis do .env
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;

// Cria o client corretamente
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.use(express.json());

// Rota GET para listar todas as receitas
app.get('/api/receitas', async (req, res) => {
  const { data, error } = await supabase.from('receitas').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Rota GET por ID
app.get('/api/receitas/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('receitas')
    .select('*')
    .eq('id', req.params.id)
    .maybeSingle(); // evita erro 500

  if (error) return res.status(500).json({ error: error.message });
  if (!data) return res.status(404).json({ error: "Receita não encontrada" });
  res.json(data);
});

// POST
app.post('/api/receitas', async (req, res) => {
  const { titulo, ingredientes, tempo_minutos, nivel_dificuldade } = req.body;

  const { data, error } = await supabase
    .from('receitas')
    .insert({ titulo, ingredientes, tempo_minutos, nivel_dificuldade })
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
});

// PUT
app.put('/api/receitas/:id', async (req, res) => {
  const { titulo, ingredientes, tempo_minutos, nivel_dificuldade } = req.body;

  const { data, error } = await supabase
    .from('receitas')
    .update({ titulo, ingredientes, tempo_minutos, nivel_dificuldade })
    .eq('id', req.params.id)
    .select();

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0) return res.status(404).json({ error: "Receita não encontrada" });

  res.json(data[0]);
});

// DELETE
app.delete('/api/receitas/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('receitas')
    .delete()
    .eq('id', req.params.id)
    .select();

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0) return res.status(404).json({ error: "Receita não encontrada" });

  res.json({ message: "Receita excluída com sucesso" });
});

// Iniciar servidor
app.listen(3000, () => console.log('API rodando na porta 3000'));
