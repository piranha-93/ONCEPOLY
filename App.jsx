import React from "react";
import { useGame, GameProvider } from "./context/GameContext";
import Header from "./components/Header";
import Lobby from "./components/Lobby";
import BoardView from "./components/BoardView";
import InlineActionPanel from "./components/InlineActionPanel";
import PlayerHUD from "./components/PlayerHUD";
import ActionLog from "./components/ActionLog";
import { Trophy, RefreshCw } from "lucide-react";

function MainApp() {
  const { gameState, createGame } = useGame();

  const winner = gameState.status === "FINISHED" 
    ? gameState.players.find(p => !p.isBankrupt)
    : null;

  return (
    <div className="app-viewport">
      <Header />

      <main className="main-content">
        {gameState.status === "LOBBY" && <Lobby />}

        {(gameState.status === "PLAYING" || gameState.status === "FINISHED") && (
          <>
            {gameState.status === "FINISHED" && winner && (
              <div className="p-6 text-center rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border-2 border-amber-400 animate-pop-in shadow-2xl my-2">
                <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-2 animate-bounce" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-amber-300">¡GANADOR DE ONCEPOLY!</span>
                <h2 className="text-2xl font-black text-white mt-1" style={{ color: winner.colorHex }}>
                  {winner.name}
                </h2>
                <p className="text-sm text-slate-300 mt-2 font-medium">
                  ha demostrado ser el mejor gestor con un presupuesto final de <strong className="text-emerald-400">{winner.money} €</strong>.
                </p>

                <button
                  onClick={() => createGame()}
                  className="btn-primary mt-4 flex items-center justify-center gap-2 mx-auto"
                >
                  <RefreshCw size={18} /> Nueva Partida
                </button>
              </div>
            )}

            {/* Tablero Gráfico Interactivo 2D con Lanzador de Dados Integrado */}
            <BoardView />

            {/* Panel de Acción Contextual Totalmente Inline (Sin Ventanas Emergentes) */}
            <InlineActionPanel />

            {/* Historial de Acciones en Vivo */}
            <ActionLog />

            {/* Dashboard Inferior Multijugador */}
            <PlayerHUD />
          </>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <MainApp />
    </GameProvider>
  );
}
